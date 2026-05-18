const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export function getDashboardToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("dashboard_token");
}

export function saveDashboardToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("dashboard_token", token);
}

export function removeDashboardToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("dashboard_token");
}

export function isDashboardLoggedIn() {
  return Boolean(getDashboardToken());
}

export async function publicApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    let message = "API request failed";

    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch {
      // ignore JSON parse error
    }

    throw new Error(message);
  }

  return response.json();
}

export async function protectedApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getDashboardToken();

  if (!token) {
    throw new Error("No dashboard token found");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (response.status === 401 || response.status === 403) {
    removeDashboardToken();

    if (typeof window !== "undefined") {
      window.location.href = "/dashboard/login";
    }

    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    let message = "API request failed";

    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch {
      // ignore JSON parse error
    }

    throw new Error(message);
  }

  return response.json();
}