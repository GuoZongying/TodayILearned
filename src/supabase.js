import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://navpkkqncwqlwcnbmayk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdnBra3FuY3dxbHdjbmJtYXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NTI1OTksImV4cCI6MTk5OTUyODU5OX0.xESIuFnosN1IVn5nDuw8yywU2WNswWS9frThrHZEMXo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
