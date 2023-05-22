'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const fetchCategories = async () => {
  const response = await fetch('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories');
  const data = await response.json();
  return data;
};

const fetchBlogPosts = async () => {
  const response = await fetch('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies');
  const data = await response.json();
  return data;
};


const Pagination = ({curentPage, totalPages, onPageChange}) =>{
  const pageNumbers = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination">
      {
        pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => onPageChange(pageNumber + 1)}
          disabled={curentPage == pageNumber + 1} style={{marginBottom:"100px"}}>
            {pageNumber + 1}
          </button>
        ))
      }
    </div>
  )
}

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selected, setSelected] = useState('all')
  const [currentPage,setCurrentPage] = useState(1);

  const moviesPerPage = 8;

  const indexOfLast = currentPage * moviesPerPage;

  const indexOfFirst = indexOfLast - moviesPerPage;

  const currentmovies = filteredPosts.slice(indexOfFirst, indexOfLast); 

  const totalPages = Math.ceil(filteredPosts.length / moviesPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    fetchCategories().then(data => setCategories(data));
    fetchBlogPosts().then(data => {
      setBlogPosts(data);
      setFilteredPosts(data);
      console.log(blogPosts);
    });
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}`;
    }
    return description;
  };

  const filterCategories = (categoryId) => {
    setSelected(categoryId)
    if (categoryId === 'all') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.categoryId == categoryId);
      console.log(categoryId + 'TREBA DA BDUU ISTI' + blogPosts[2].categoryId);
      setFilteredPosts(filtered);
    }
  };

  const expandDescription = (event) => {
    const target = event.target;
    const description = target.dataset.description;
    target.textContent = description;
  };

  return (
    <div>
      
      <h1 className="text-center text-2xl" style={{padding :"20px 0 50px 0 "}}>Categories</h1>
      <ul className="text-base flex justify-center" style={{ gap: "1rem", borderBottom:"2px solid red"}}>
        <li className={"inline " + (selected === 'all' ? 'selected' : '')}  onClick={() => filterCategories('all')}>All</li>
        {categories.map(category => (
          <li className={"inline " + (category.id === selected ? 'selected' : '')} key={category.id} onClick={() => filterCategories(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>



      <div className="flex justify-center flex-wrap" style={{ gap: 80 }}>
        {currentmovies.map(post => (
          <div key={post.id} className="flex flex-row items-center justify-center max-w-1/4" style={{ minHeight: '500px', gap: '80px', paddingTop:"40px" }}>
            <div className="flex flex-col items-center justify-center gap-10 wrap">
              <img className="mx-auto" src={post.imageUrl} style={{borderRadius:"10px"}} alt="naslovna fotografija" height="200px" />
              <Link href={`/posts/${post.id}`}>
                <h5 style={{ color: "red" }} className="text-center text-2xl">{post.name}</h5>
              </Link>
              <p className="text-justify" style={{ maxWidth: '30ch'}}>
                {truncateDescription(post.description, 120)}
                {post.description.length > 120 && (
                  <span className="text-blue-500 cursor-pointer" data-description={post.description} onClick={expandDescription}>
                    ...
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination className="" curentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
    </div>
  );
};

export default HomePage;
