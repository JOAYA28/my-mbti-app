-- ============================================================
-- IT 부캐 찾기 MBTI 테스트 - Supabase 스키마
-- Supabase 프로젝트의 SQL Editor에서 아래 스크립트를 실행하세요.
-- ============================================================

-- 1. 결과 저장 테이블
create table if not exists public.mbti_results (
  id uuid primary key default gen_random_uuid(),
  mbti_result text not null check (char_length(mbti_result) = 4),
  answers jsonb not null,
  created_at timestamptz not null default now()
);

-- 2. Row Level Security 활성화
alter table public.mbti_results enable row level security;

-- 3. 익명 사용자도 결과를 저장(insert)할 수 있도록 허용
drop policy if exists "Allow public insert" on public.mbti_results;
create policy "Allow public insert"
  on public.mbti_results
  for insert
  to anon
  with check (true);

-- 4. 익명 사용자가 전체 참여자 수를 집계(select)할 수 있도록 허용
drop policy if exists "Allow public read" on public.mbti_results;
create policy "Allow public read"
  on public.mbti_results
  for select
  to anon
  using (true);

-- 5. 실시간(Realtime) 구독 활성화 -> 메인 화면 실시간 참여자 수 배너에 사용
alter publication supabase_realtime add table public.mbti_results;

-- 6. 조회 성능을 위한 인덱스
create index if not exists mbti_results_created_at_idx
  on public.mbti_results (created_at desc);
