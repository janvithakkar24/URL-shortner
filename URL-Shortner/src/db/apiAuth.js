import supabase from "./supabase";

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

// export async function register(email, password) {}

// export async function logout() {}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  if (!session.session) return null;
  return session.session?.user;
}
