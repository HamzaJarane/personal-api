import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Save, FileText, X } from 'lucide-react';

const FormContainer = styled.div`
  background-color: #1C1C1E;
  border-radius: 12px;
  border: 1px solid #3A3A3C;
  padding: 1.5rem;
  width: 100%;
  transition: all 0.3s ease;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #FFFFFF;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #3A3A3C;
  border-radius: 8px;
  background-color: #2C2C2E;
  color: #FFFFFF;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #0A84FF;
    box-shadow: 0 0 0 2px #0A84FF30;
  }
`;

const SlugInput = styled(Input)`
  font-family: monospace;
  background-color: #2C2C2E80;
  color: #EBEBF0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #3A3A3C;
  border-radius: 8px;
  background-color: #2C2C2E;
  color: #FFFFFF;
  min-height: 200px;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #0A84FF;
    box-shadow: 0 0 0 2px #0A84FF30;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: #3A3A3C;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.3s ease;
  }
`;

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + ${ToggleSwitch} {
    background-color: #32D74B;
    
    &::after {
      transform: translateX(20px);
    }
  }
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-color: ${({ variant }) => variant === 'secondary' ? 'transparent' : '#0A84FF'};
  color: ${({ variant }) => variant === 'secondary' ? '#FFFFFF' : 'white'};
  border: ${({variant }) => variant === 'secondary' ? `1px solid #3A3A3C` : 'none'};
  
  &:hover {
    background-color: ${({ variant }) =>
        variant === 'secondary' ? '#3A3A3C' : `#0A84FFdd`};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface BlogFormProps {
    onCancel: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onCancel }) => {
    // const { addBlog, updateBlog, selectedBlogId, getSelectedBlog, clearSelection } = useBlogStore();

    // const selectedBlog = getSelectedBlog();

    const [formData, setFormData] = useState<any>({
        title: '',
        slug: '',
        content: '',
        active: false,
    });

    useEffect(() => {
        // if (selectedBlog) {
        //     setFormData({
        //         title: selectedBlog.title,
        //         slug: selectedBlog.slug,
        //         content: selectedBlog.content,
        //         active: selectedBlog.active,
        //     });
        // } else {
            setFormData({
                title: '',
                slug: '',
                content: '',
                active: false,
            });
        // }
    }, [/* selectedBlog */]);

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData({
            ...formData,
            title,
            slug: generateSlug(title),
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleActiveToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            active: e.target.checked,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert('Title is required');
            return;
        }

        // if (selectedBlogId) {
        //     updateBlog(selectedBlogId, formData);
        // } else {
        //     addBlog(formData);
        // }

        // clearSelection();
        onCancel();
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormHeader>
                    {/* <FormTitle>
                        {selectedBlogId ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </FormTitle> */}
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onCancel}
                        aria-label="Cancel"
                    >
                        <X size={18} />
                    </Button>
                </FormHeader>

                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="Enter post title"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="slug">Slug</Label>
                    <SlugInput
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="post-url-slug"
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="content">Content</Label>
                    <TextArea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your blog post content here..."
                        rows={10}
                    />
                </FormGroup>

                <FormActions>
                    <ToggleContainer>
                        <ToggleLabel>
                            <ToggleInput
                                checked={formData.active}
                                onChange={handleActiveToggle}
                            />
                            <ToggleSwitch />
                            Active
                        </ToggleLabel>
                    </ToggleContainer>

                    {/* <ButtonGroup>
                        <Button type="submit">
                            <Save size={18} />
                            {selectedBlogId ? 'Update Post' : 'Save Post'}
                        </Button>
                    </ButtonGroup> */}
                </FormActions>
            </form>
        </FormContainer>
    );
};

export default BlogForm;