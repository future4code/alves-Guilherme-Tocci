import React, { useState } from "react";
import { BASE_URL } from "../../components/BaseUrl";
import useProtectedPage from "../../hooks/useProtectedPages";
import useRequestData from "../../hooks/useRequestData";
import styled from "styled-components";
import axios from "axios";
import useForm from "../../hooks/useForm";

const CardPost = styled.div`
  background-color: #ededed;
  width: 100%;
`;
const IconDiv = styled.div`

`

function FeedPage() {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}posts`);
  const [form, handleInputChange, clear] = useForm({ title: "", body: "" });

  const OnSubmitPost = (event) => {
    clear();

    axios
      .post(`${BASE_URL}posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const postsCard = posts.map((post) => {
    return (
      <CardPost key={post.id}>
        <p>{post.username}</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>comentários</p>
        <IconDiv>
          <p>{post.voteSum}</p>
          <img></img>
          <img></img>
          <p>{post.commentCount}</p>
        </IconDiv>
      </CardPost>
    );
  });

  return (
    <div>
      <h1>FeedPage</h1>
      <form onSubmit={OnSubmitPost}>
        <input
          name="title"
          placeholder="Título do post"
          value={form.title}
          onChange={handleInputChange}
        ></input>
        <input
          name="body"
          placeholder="Escreva seu post"
          value={form.body}
          onChange={handleInputChange}
        ></input>
        <button>Postar</button>
      </form>
      {postsCard}
    </div>
  );
}
export default FeedPage;
