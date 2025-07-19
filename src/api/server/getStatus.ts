import { apiFetch } from "@/client";
import { ServerStatus } from "@/types/server";

export async function getServerStatus(): Promise<ServerStatus[]> {
  return apiFetch<ServerStatus[]>("/server/status");
}