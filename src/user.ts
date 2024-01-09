// user.ts
/**
 * Represents a user in the system.
 */
export interface User {
    /**
     * The unique identifier for the user.
     */
    id: number;
  
    /**
     * The name of the user.
     */
    name: string;
  
    /**
     * The email address of the user.
     */
    email: string;
  
    /**
     * The role of the user in the system.
     */
    role: UserRole;
  }
  
  /**
   * The set of possible roles a user can have.
   */
  export enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST',
  }