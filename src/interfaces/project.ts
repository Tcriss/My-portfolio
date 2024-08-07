export interface Project {
  name: string;
  link: string | null;
  githubLink: string;
  imageUrl: string | ImageMetadata;
  description: string;
  tags: string[];
}
