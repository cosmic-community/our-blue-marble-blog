// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata?: Record<string, any>; // Changed: Made optional to allow child interfaces to override with null or specific types
  type: string;
  created_at: string;
  modified_at: string;
}

// Globals singleton
export interface Globals extends CosmicObject {
  type: 'globals';
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: null;
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Post interface
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    hero?: {
      url: string;
      imgix_url: string;
    };
    content?: string;
    teaser?: string;
    author?: Author;
    published_date: string;
    categories?: Category[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Single object response
export interface CosmicSingleResponse<T> {
  object: T;
}