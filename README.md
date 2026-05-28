# 이원재 포트폴리오 — Frontend · Backend · Fullstack Developer

Next.js 기반의 개발자 포트폴리오 사이트입니다.
팀 프로젝트 4개를 소개하고, 각 프로젝트의 상세 내용을 MDX로 관리합니다.

---

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [주요 기능](#주요-기능)
3. [포함 프로젝트](#포함-프로젝트)
4. [기술 스택](#기술-스택)
5. [프로젝트 구조](#프로젝트-구조)
6. [콘텐츠 추가 방법](#콘텐츠-추가-방법)
7. [실행 방법](#실행-방법)
8. [Vercel 배포](#vercel-배포)

---

## 프로젝트 소개

| 항목 | 내용 |
|------|------|
| 프로젝트 유형 | 개인 프로젝트 (포트폴리오) |
| 개발 기간 | 2026.05 ~ |
| 배포 주소 | [wonjae.cloud](https://wonjae.cloud) |
| 포함 프로젝트 | AlterRe · KosLearn · MetaLearning · Edudy (팀 프로젝트 4개) |

---

## 주요 기능

- **다크 / 라이트 테마 토글** — `next-themes` 기반, 새로고침 후에도 유지
- **반응형 레이아웃** — 모바일 1열 → 데스크톱 2열 카드 그리드
- **메인 페이지** — Hero · 기술 스택 · 프로젝트 카드 · 연락처
- **프로젝트 상세 페이지** — `content/projects/*.mdx`를 읽어 렌더 (빌드 시 정적 생성, SSG)
- **MDX 기반 콘텐츠** — 프로젝트마다 개요 · 기획 · ERD · 일정 표 등 자유 구성

---

## 포함 프로젝트

| 프로젝트 | 설명 | 스택 | 링크 |
|----------|------|------|------|
| **AlterRe** | 농산물 데이터 시각화 웹 | HTML · CSS · JS · Python | [데모](https://kosmoalterre.netlify.app) · [GitHub](https://github.com/leewj12/alterre) |
| **KosLearn** | 온라인 강의 플랫폼 | Spring · MySQL · Thymeleaf · Docker | [데모](https://koslearn.wonjae.cloud) · [GitHub](https://github.com/leewj12/koslearn) |
| **MetaLearning** | KDT 교육 관리 플랫폼 | Spring · MySQL · React · AWS S3 | [데모](https://metalearning.wonjae.cloud) · [GitHub](https://github.com/leewj12/metalearning) |
| **Edudy** | 교육 기관 ERP | Spring · MySQL · React · Tailwind | [데모](https://edudy.wonjae.cloud) · [Back](https://github.com/leewj12/edudy) · [Front](https://github.com/leewj12/edudy-front) |

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| Language | TypeScript |
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS, @tailwindcss/typography |
| Theme | next-themes (다크 / 라이트) |
| Content | MDX (next-mdx-remote), gray-matter, remark-gfm |
| Icons | lucide-react |
| Font | Geist (Sans / Mono) |
| Deploy | Vercel |

---

## 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 + 테마 프로바이더
│   ├── page.tsx                # 메인 페이지
│   ├── globals.css
│   └── projects/[slug]/
│       └── page.tsx            # 프로젝트 상세 (MDX 렌더)
├── components/                 # Hero, 기술스택, 카드, 네비바, 테마 토글 등
├── content/projects/           # 프로젝트별 콘텐츠 (.mdx)
│   ├── alterre.mdx
│   ├── koslearn.mdx
│   ├── metalearning.mdx
│   └── edudy.mdx
├── lib/projects.ts             # MDX frontmatter 로더
└── public/projects/<slug>/     # 프로젝트별 이미지 (ERD, 스크린샷 등)
```

---

## 콘텐츠 추가 방법

프로젝트 상세 내용은 코드 수정 없이 MDX 파일만 편집하면 됩니다.

1. `content/projects/<slug>.mdx` 작성 — frontmatter(카드 정보) + 본문(마크다운)

   ```mdx
   ---
   order: 5
   name: 새 프로젝트
   tagline: 한 줄 설명
   tech: [Next.js, TypeScript]
   demo: https://example.com
   period: 팀 프로젝트 5
   role: 프론트엔드
   repos:
     - label: GitHub
       url: https://github.com/leewj12/example
   ---

   ## 개요
   본문 작성...
   ```

2. 이미지는 `public/projects/<slug>/`에 넣고 `![ERD](/projects/<slug>/erd.png)`로 삽입
3. `git push` → Vercel 자동 재배포

---

## 실행 방법

### 사전 요구사항

- Node.js 18.17 이상 (20+ 권장)

### 1. 의존성 설치

```bash
npm install
```

### 2. 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 3. 프로덕션 빌드

```bash
npm run build
npm run start
```

---

## Vercel 배포

1. [vercel.com](https://vercel.com)에서 GitHub 레포 `leewj12/portfolio` 연결
2. Framework Preset: **Next.js** (자동 감지, 별도 설정 불필요)
3. Deploy → `*.vercel.app` 주소 발급
4. 커스텀 도메인: 가비아 DNS에서 apex(`@`) A 레코드를 Vercel IP로 설정 → `wonjae.cloud` 연결
5. `main` 브랜치에 push할 때마다 자동 재배포
