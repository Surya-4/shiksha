import React from 'react'
import Item from './Item';

export default function Courses() {
  function Course(image, url, Educator, Title) {
    this.image = image;
    this.url = url;
    this.Educator = Educator;
    this.Title = Title;
  }
  let courses=[];
  let c=new Course('https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F090fefe24d23d47584f6ddc7eb5a241e.png&w=384&q=75','https://www.codewithharry.com/videos/react-tutorials-in-hindi-1/','Code with Harry','React Js');
  courses.push(c);
  c=new Course('https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75','https://www.codewithharry.com/videos/python-100-days-of-code-1/','Code with Harry','Python');
  courses.push(c);
  c=new Course('https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F62f60049963012281edcc77dd2ec031b.png&w=384&q=75','https://www.codewithharry.com/videos/nextjs-tutorial-in-hindi-1/','Code with Harry','Next Js');
  courses.push(c);
  c=new Course('https://yt3.googleusercontent.com/ytc/AGIKgqOK0bLse1lzGxQO1gwLiYks0yhYUIhJ7SI-qVDyHA=s900-c-k-c0x00ffffff-no-rj','https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p','Gate Smashers','Operating Systems');
  courses.push(c);
  c=new Course('https://yt3.googleusercontent.com/ytc/AGIKgqOK0bLse1lzGxQO1gwLiYks0yhYUIhJ7SI-qVDyHA=s900-c-k-c0x00ffffff-no-rj','https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_','Gate Smashers','Computer Networks');
  courses.push(c);
  c=new Course('https://yt3.googleusercontent.com/ytc/AGIKgqOK0bLse1lzGxQO1gwLiYks0yhYUIhJ7SI-qVDyHA=s900-c-k-c0x00ffffff-no-rj','https://www.youtube.com/playlist?list=PLxCzCOWd7aiHqU4HKL7-SITyuSIcD93id','SQL','Gate Smashers');
  courses.push(c);
  c=new Course('https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0','https://www.youtube.com/watch?v=i_LwzRVP7bg','FreeCodeCamp','Machine Learning');
  courses.push(c);
  c=new Course('https://yt3.googleusercontent.com/ytc/AGIKgqMNnqfr-tuqVi_0YLkfx3-FGohChjCaNTNguHzp=s900-c-k-c0x00ffffff-no-rj','https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK','Web Dev Simplified','React Js')
  courses.push(c)
  return (
    <>
      <div className="course-intro">
        <h1>Welcome to Shiksha</h1>
        <h2>Here are the Courses we offer for our grads</h2>
        <h4>Courses</h4>
      </div>
      <div className="container">
        <div className="row">
          {courses.map((element) => {
            return (
              <div className="col-md-4">
                <Item
                  image={element.image}
                  title={element.Title}
                  edu={element.Educator}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
