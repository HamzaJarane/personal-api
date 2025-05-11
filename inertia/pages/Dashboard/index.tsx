import { useState } from 'react';
import styled from 'styled-components';
import SideBar from '@/components/BlogEditor/SideBar';
import BlogForm from '@/components/BlogEditor/BlogForm';
import BlogPreview from '@/components/BlogEditor/BlogPreview';
import { FileText } from 'lucide-react';
import Layout from '@/layouts/BlogEditor';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 72px);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  flex: 1;
  
  @media (min-width: 1024px) {
    grid-template-columns: 320px 1fr;
  }
`;

const MainContent = styled.div`
  flex: 1;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 3rem;
  background-color: #1C1C1E;
  border-radius: 12px;
  border: 1px solid #3A3A3C;
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const WelcomeDescription = styled.p`
  font-size: 1.125rem;
  color: #EBEBF0;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const WelcomeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: #0A84FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #0A84FFdd;
    transform: translateY(-2px);
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #0A84FF;
  margin-bottom: 1.5rem;
`;

function Dashboard() {
    const [isCreating, setIsCreating] = useState(false);
    // const { blogs, selectedBlogId, selectBlog } = useBlogStore();

    const handleNewPost = () => {
        // selectBlog('');
        setIsCreating(true);
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
    };

    const handleEdit = () => {
        setIsCreating(true);
    };

    const renderContent = () => {
        if (isCreating) {
            return <BlogForm onCancel={handleCancelCreate} />;
        }

        return <>Not implemented</>;

        // if (selectedBlogId) {
        //     return <BlogPreview onEdit={handleEdit} />;
        // }

        // if (blogs.length === 0) {
        //     return (
        //         <WelcomeContainer>
        //             <IconContainer>
        //                 <FileText size={48} />
        //             </IconContainer>
        //             <WelcomeTitle>Welcome to Blog Writer</WelcomeTitle>
        //             <WelcomeDescription>
        //                 Start creating beautiful blog posts with our easy-to-use editor.
        //                 Write, preview, and manage all your content in one place.
        //             </WelcomeDescription>
        //             <WelcomeButton onClick={handleNewPost}>
        //                 Create Your First Post
        //             </WelcomeButton>
        //         </WelcomeContainer>
        //     );
        // }

        // return <BlogPreview onEdit={handleEdit} />;
    };

    return (
        <AppContainer>
            <ContentContainer>
                <SideBar onNewPost={handleNewPost} />
                <MainContent>{renderContent()}</MainContent>
            </ContentContainer>
        </AppContainer>

    );
}

Dashboard.Layout = (children: any) => <Layout children={children} />;

export default Dashboard;