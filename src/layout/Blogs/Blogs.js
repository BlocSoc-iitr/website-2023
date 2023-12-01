import React from 'react';
import styles from './Blogs.module.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import Blogs_list from './Blogs_list';




const Blogs = (props) => {
    const list = Blogs_list.Blogs_list;
    return (
        <div className={styles.Body}>
            <div className={styles.container}>
            <div className={styles.sub}>
                {list.map((m,index)=>{
                    return(
                        <BlogCard 
                          heading={m.heading} 
                          desc={m.desc} link={m.link} 
                          index={index} 
                          key={m.heading} 
                        />
                    );
                })}
            </div>
            </div>
            
        </div>
    );
};


export default Blogs;