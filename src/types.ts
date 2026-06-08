export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string; // Placeholder or generated asset path
  terminalOutput?: string; // For the interactive preview terminal as seen in Battleship/Calculator
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Resolves to a Lucide icon
  technologies: string[];
}

export interface Stat {
  id: string;
  value: string; // e.g., "120"
  suffix: string; // e.g., "+" or "%"
  label: string; // e.g., "Completed Projects"
}

export interface Testimony {
  id: string;
  quote: string;
  author: string;
  role: string;
}
