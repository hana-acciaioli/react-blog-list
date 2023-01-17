import React from 'react';
import { checkError } from '../../services/client.js';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, text, image, authors: { name } }) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
        <duv className="name">{name}</duv>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
