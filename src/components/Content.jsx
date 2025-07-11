function Content({ content }) {
  return (
    <div className="content-container p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div className="text-xl font-semibold mb-2 text-gray-50">
        {content.title}
      </div>
      <p className="text-gray-600 text-sm">{content.subtitle}</p>
    </div>
  );
}
export default Content;
