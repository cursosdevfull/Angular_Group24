import { Course } from '../domain/course';

// Lista de cursos ficticios para el sistema
export const MOCK_COURSES: Course[] = [
  new Course('Angular Fundamentals'),
  new Course('TypeScript Advanced Patterns'),
  new Course('Node.js Backend Development'),
  new Course('React Hooks Masterclass'),
  new Course('Vue.js Progressive Framework'),
  new Course('Python Data Science'),
  new Course('JavaScript ES6+'),
  new Course('Docker for Developers'),
  new Course('AWS Cloud Practitioner'),
  new Course('MongoDB Database Design'),
  new Course('Spring Boot Microservices'),
  new Course('Flutter Mobile Development'),
  new Course('GraphQL API Design'),
  new Course('Machine Learning Basics'),
  new Course('Cybersecurity Fundamentals'),
  new Course('DevOps CI/CD Pipeline'),
  new Course('Blockchain Development'),
  new Course('Data Structures & Algorithms'),
  new Course('System Design Interview'),
  new Course('Agile Project Management'),
  new Course('UI/UX Design Principles'),
  new Course('Kotlin Android Development'),
  new Course('Swift iOS Development'),
  new Course('PostgreSQL Advanced Queries'),
  new Course('Redis Caching Strategies'),
  new Course('Elasticsearch Full-Text Search'),
  new Course('Apache Kafka Streaming'),
  new Course('Terraform Infrastructure'),
  new Course('Kubernetes Orchestration'),
  new Course('Git Version Control'),
];

// Función helper para obtener un curso por ID
export function getCourseById(id: number): Course | undefined {
  return MOCK_COURSES.find((course) => course.properties.id === id);
}

// Función helper para obtener cursos paginados
export function getCoursesByPage(
  page: number,
  pageSize: number,
): {
  courses: Course[];
  total: number;
  totalPages: number;
  currentPage: number;
} {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCourses = MOCK_COURSES.slice(startIndex, endIndex);

  return {
    courses: paginatedCourses,
    total: MOCK_COURSES.length,
    totalPages: Math.ceil(MOCK_COURSES.length / pageSize),
    currentPage: page,
  };
}

// Función helper para buscar cursos por título
export function searchCoursesByTitle(searchTerm: string): Course[] {
  return MOCK_COURSES.filter((course) =>
    course.properties.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}
