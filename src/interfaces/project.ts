export interface Project {
  name: string;
  link: string | null;
  githubLink: string;
  imageUrl: ImageMetadata;
  description: string;
  tags: string[];
}
