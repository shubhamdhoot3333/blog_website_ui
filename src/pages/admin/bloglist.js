import { useEffect, useState } from 'react';
import axios from 'axios';
import { AllBLog } from  '../../services/api'; 
import Table from '@/components/table';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      let data = { page: 1, limit: 10 };

      try {
        const result = await AllBLog(data); // Ensure you await the Promise
        console.log(result.data)
        setBlogs(result.data);
      } catch (error) {
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 >Blog List</h1>
      <ul>
        {blogs.length > 0 ? (
        //   blogs.map((blog) => (
            <Table data={blogs} /> 
        //   ))
        ) : (
          <p>No blogs available.</p>
        )}
      </ul>
    </div>
  );
};

export default BlogList;
