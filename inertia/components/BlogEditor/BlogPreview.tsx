import React from 'react';
import styled from 'styled-components';
import { Edit, Calendar } from 'lucide-react';
// import { useBlogStore } from '../store/useBlogStore';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import '@/pages/Post/index.css';

const PreviewContainer = styled.div`
  background-color: #1C1C1E;
  border-radius: 12px;
  border: 1px solid #3A3A3C;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  transition: all 0.3s ease;
`;

const PreviewHeader = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #3A3A3C;
  padding-bottom: 1.5rem;
`;

const PreviewTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.2;
`;

const PreviewMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #EBEBF0;
  font-size: 0.875rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const StatusBadge = styled.span<{ active: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ active }) => active ? `#32D74B20` : `#FF9F0A20`};
  color: ${({ active }) => active ? '#32D74B' : '#FF9F0A'};
`;

const PreviewContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #FFFFFF;
  
  p:first-of-type {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #0A84FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background-color: #0A84FFdd;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #EBEBF0;
  text-align: center;
  padding: 2rem;
`;

interface BlogPreviewProps {
    onEdit: () => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ onEdit }) => {
    // const { getSelectedBlog } = useBlogStore();
    // const blog = getSelectedBlog();

    // if (!blog) {
    //     return (
    //         <PreviewContainer>
    //             <EmptyState>
    //                 <p>Select a blog post from the sidebar or create a new one to get started.</p>
    //             </EmptyState>
    //         </PreviewContainer>
    //     );
    // }

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <PreviewContainer>
            {/* <PreviewHeader>
                <PreviewTitle>{blog.title}</PreviewTitle>
                <PreviewMeta>
                    <MetaItem>
                        <Calendar size={14} />
                        {formatDate(blog.updatedAt)}
                    </MetaItem>
                    <StatusBadge active={blog.active}>
                        {blog.active ? 'Published' : 'Draft'}
                    </StatusBadge>
                </PreviewMeta>
            </PreviewHeader>

            <Markdown
                rehypePlugins={[rehypeRaw]}
                className={'markdown-body'}
            >
                {blog.content}
            </Markdown> */}

            <EditButton onClick={onEdit}>
                <Edit size={16} />
                Edit Post
            </EditButton>
        </PreviewContainer>
    );
};

export default BlogPreview;