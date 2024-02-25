import {
	pgTable,
	pgEnum,
	bigserial,
	varchar,
	timestamp,
	text,
	integer,
	uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModelFromColumns, sql } from "drizzle-orm";

export const keyStatus = pgEnum("key_status", [
	"expired",
	"invalid",
	"valid",
	"default",
]);
export const keyType = pgEnum("key_type", [
	"stream_xchacha20",
	"secretstream",
	"secretbox",
	"kdf",
	"generichash",
	"shorthash",
	"auth",
	"hmacsha256",
	"hmacsha512",
	"aead-det",
	"aead-ietf",
]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
	"plain",
	"s256",
]);

export const userStory = pgTable("user_story", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	name: varchar("name").notNull(),
});

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).primaryKey().notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", {
		withTimezone: true,
		mode: "string",
	}),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: timestamp("rolled_back_at", {
		withTimezone: true,
		mode: "string",
	}),
	startedAt: timestamp("started_at", { withTimezone: true, mode: "string" })
		.defaultNow()
		.notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const projects = pgTable("projects", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", {
		precision: 6,
		withTimezone: true,
		mode: "string",
	})
		.defaultNow()
		.notNull(),
	name: text("name"),
});

export const features = pgTable(
	"features",
	{
		id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
		createdAt: timestamp("created_at", {
			precision: 6,
			withTimezone: true,
			mode: "string",
		})
			.defaultNow()
			.notNull(),
		name: varchar("name").notNull(),
	},
	(table) => {
		return {
			nameKey: uniqueIndex("features_name_key").on(table.name),
		};
	}
);

export const resources = pgTable("resources", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", {
		precision: 6,
		withTimezone: true,
		mode: "string",
	})
		.defaultNow()
		.notNull(),
	name: varchar("name"),
});

export const teams = pgTable("teams", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", {
		precision: 6,
		withTimezone: true,
		mode: "string",
	})
		.defaultNow()
		.notNull(),
	name: varchar("name"),
});

export type Project = 
