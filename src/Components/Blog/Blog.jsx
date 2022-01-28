import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Blog.scss";

export default function Blog() {
  const BlogArray = [
    {
      image: "grid1.jpeg",
      category: "Interior",
      published: "March 19, 2020",
      author: "Tom Black",
      title: "Top 10 Tips for Your Kitchen Interior Design",
      description: "A faceting effect livens up and...",
    },
    {
      image: "grid2.jpeg",
      category: "Interior",
      published: "March 19, 2020",
      author: "Tom Black",
      title: "The Golden Ratio Rules for Best 2D Sketch",
      description: "A faceting effect livens up and...",
    },
    {
      image: "grid3.jpeg",
      category: "Interior",
      published: "March 19, 2020",
      author: "Tom Black",
      title: "Use Pastel Colors & Natural Materials",
      description: "A faceting effect livens up and...",
    },
  ];

  return (
    <section className="BlogContainer">
      <div className="TopContainer">
        <TitleComponent section="Our Blog" title="Read Our Latest News" />

        <button className="ViewAll">View All</button>
      </div>

      <div className="BottomContainer">
        {BlogArray.map((obj) => {
          return (
            <div className="BlogPost">
              <div className="BlogPicture">
                <img
                  src={require("../../Assets/Images/" + obj.image)}
                  alt="Blog Preview"
                />
                <span className="Category">{obj.category}</span>
              </div>

              <div className="BlogPostText">
                <div className="PublishedAuthor">
                  <span>{obj.published}</span>
                  <div className="Circle" />
                  <div className="Circle" />
                  <span>{obj.author}</span>
                </div>

                <h4 className="BlogTitle">{obj.title}</h4>

                <p className="BlogDescription">{obj.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
