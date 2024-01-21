import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzyguzowlichqluysenn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eWd1em93bGljaHFsdXlzZW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NjQ3NDksImV4cCI6MjAyMTI0MDc0OX0.7dPRX3gJiCoZkd0s3u3W5vw73sG8umJwvVfvvEqxExU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
