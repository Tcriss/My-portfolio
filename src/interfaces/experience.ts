export interface Experience {
  company: string;
  companyLogoUrl: string | ImageMetadata;
  comapyPageUrl: string;
  time: string;
  positions: Position[];
  tags: string[];
}

interface Position {
  role: string;
  description: string;
  start: string;
  end: string;
}
