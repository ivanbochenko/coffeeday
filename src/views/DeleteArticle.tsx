interface DeleteArticleButtonProps {
  id: number | string;
}

export default function DeleteArticleButton({ id }: DeleteArticleButtonProps) {
  return (
    <button
      hx-delete={`/article/${id}`}
      hx-confirm="Are you sure you want to delete this article?"
      hx-target="closest .article-card"
      hx-swap="outerHTML"
      className="px-3 py-1.5 h-10 rounded-xl bg-[#b23b3b] text-[#fff] text-sm font-medium hover:opacity-90 transition flex items-center gap-1"
    >
      Delete
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
