import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dyydiipuxpbvspawwjhl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eWRpaXB1eHBidnNwYXd3amhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NDYxODAsImV4cCI6MjA4ODMyMjE4MH0.ddwiOPIWhgJLRcvC1yXFNtiTq0N9DccHz8AwmpnD9GQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
