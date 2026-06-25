-- Run this to update your profiles table for Phase 3
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS github_username text;

-- Run this to allow deleting projects
CREATE POLICY "Users can delete own projects." ON public.projects FOR DELETE USING (auth.uid() = user_id);
