import React from 'react';
import styled from 'styled-components';
import { Edit, Trash2, Eye, PlusCircle } from 'lucide-react';


const SidebarContainer = styled.div`
  background-color: #2C2C2E;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
`;

const SidebarHeader = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid #3A3A3C;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const NewPostButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0A84FF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.875rem;

  &:hover {
    background-color: #0A84FFdd;
  }
`;

const BlogList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #EBEBF0;
  text-align: center;
  padding: 1rem;
`;

const BlogItem = styled.div<{ selected: boolean, active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background-color: ${({ selected }) => selected ? `#0A84FF15` : '#1C1C1E'};
  border: 1px solid ${({ selected }) => selected ? '#0A84FF' : '#3A3A3C'};
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: ${({ selected }) => selected ? '#0A84FF' : '#8E8E93'};
  }
  
  ${({ active }) => !active && `
    &::after {
      content: 'Draft';
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background-color: #FF9F0A20;
      color: #FF9F0A;
    }
  `}
`;

const BlogItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

const BlogItemMeta = styled.div`
  font-size: 0.8125rem;
  color: #EBEBF0;
  margin-bottom: 0.75rem;
`;

const BlogActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #EBEBF0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #3A3A3C;
    color: #FFFFFF;
  }
`;

interface SidebarProps {
  onNewPost: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ onNewPost }) => {
  // const { blogs, selectedBlogId, selectBlog, deleteBlog } = useBlogStore();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>Blog Posts</SidebarTitle>
        <NewPostButton onClick={onNewPost}>
          <PlusCircle size={16} />
          New Post
        </NewPostButton>
      </SidebarHeader>
      <BlogList>
        {/* {blogs.length === 0 ? (
          <EmptyState>
            <p>No blog posts yet</p>
            <p>Create your first post to get started</p>
          </EmptyState>
        ) : (
          blogs.map((blog: BlogPost) => (
            <BlogItem
              key={blog.id}
              selected={blog.id === selectedBlogId}
              active={blog.active}
              onClick={() => selectBlog(blog.id)}
            >
              <BlogItemTitle>{blog.title}</BlogItemTitle>
              <BlogItemMeta>
                {formatDate(blog.updatedAt)}
              </BlogItemMeta>
              <BlogActions>
                <ActionButton aria-label="Edit post" title="Edit post">
                  <Edit size={16} />
                </ActionButton>
                <ActionButton aria-label="Preview post" title="Preview post">
                  <Eye size={16} />
                </ActionButton>
                <ActionButton
                  aria-label="Delete post"
                  title="Delete post"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to delete this post?')) {
                      deleteBlog(blog.id);
                    }
                  }}
                >
                  <Trash2 size={16} />
                </ActionButton>
              </BlogActions>
            </BlogItem>
          ))
        )} */}
      </BlogList>
    </SidebarContainer>
  );
};

export default SideBar;