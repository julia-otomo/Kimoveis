import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ nullable: true, type: "date" })
  updatedAt: string | null | undefined;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt: string | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export default User;
