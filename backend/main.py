from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

import pickle
import json
from fastapi import Response
import uvicorn
import pickle
import bz2
import pandas as pd
from fastapi import Request
import json
# print(pd.__version__)
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the pre-trained model


def decompress_pickle(file):
    with bz2.BZ2File(file, 'rb') as f:
        data = pickle.load(f)
    return data

popular_books = pd.read_pickle("popular.pkl")
pt = pd.read_pickle("pt.pkl")
books = decompress_pickle('books_compressed.pbz2')
# books = pd.read_pickle("books.pkl")
similarity_score = pd.read_pickle("similarity_score.pkl")


@app.get("/")
async def get_popular_books():
    books = []
    for index, row in popular_books.iterrows():
        book = {
            "book_title": row["Book-Title"],
            "book_author": row["Book-Author"],
            "num_ratings": row["num_ratings"],
            "avg_ratings": row["avg_ratings"],
            "img": row["Image-URL-M"],
        }
        books.append(book)

    return books


@app.get("/recommend")
async def get_books(book_name: str):
    try:
        index = np.where(pt.index == book_name)[0][0]
    except:
        raise HTTPException(status_code=404, detail="Book not found")

    similar_items = sorted(
        list(enumerate(similarity_score[index])), key=lambda x: x[1], reverse=True
    )[1:11]
    data = []
    for i in similar_items:
        item = []
        temp_df = books[books["Book-Title"] == pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates(
            "Book-Title")["Book-Title"].values))
        item.extend(list(temp_df.drop_duplicates(
            "Book-Title")["Book-Author"].values))
        item.extend(list(temp_df.drop_duplicates(
            "Book-Title")["Image-URL-M"].values))
        data.append(item)
    return data


@app.post("/recommend")
async def recommend_books(request: Request):
    book_name = await request.json()
    book_name = book_name['book_name']
    try:
        index = np.where(pt.index == book_name)[0][0]
    except:
        raise HTTPException(status_code=404, detail="Book not found")
    similar_items = sorted(
        list(enumerate(similarity_score[index])), key=lambda x: x[1], reverse=True)[1:11]
    data = []
    for i in similar_items:
        item = {}
        temp_df = (books[books['Book-Title'] == pt.index[i[0]]])
        item['title'] = list(temp_df.drop_duplicates(
            'Book-Title')['Book-Title'].values)[0]
        item['author'] = list(temp_df.drop_duplicates(
            'Book-Title')['Book-Author'].values)[0]
        item['image_url'] = list(temp_df.drop_duplicates(
            'Book-Title')['Image-URL-M'].values)[0]
        data.append(item)
        json_data = json.dumps(data)

    return {"recommended_books": json_data}


if __name__ == "__main__":
    uvicorn.run(app, host="https://backend-1-p7193165.deta.app")
