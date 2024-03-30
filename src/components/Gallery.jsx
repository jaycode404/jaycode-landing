export function Gallery() {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      colSpan: 2, // Indica que esta imagen ocupará 2 columnas
      rowSpan: 1, // Indica que esta imagen ocupará 1 fila
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      colSpan: 1, // Indica que esta imagen ocupará 1 columna
      rowSpan: 2, // Indica que esta imagen ocupará 2 filas
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      colSpan: 1, // Indica que esta imagen ocupará 1 columna
      rowSpan: 1, // Indica que esta imagen ocupará 1 fila
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      colSpan: 1, // Indica que esta imagen ocupará 1 columna
      rowSpan: 1, // Indica que esta imagen ocupará 1 fila
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      {data.map(({ imageLink, colSpan, rowSpan }, index) => (
        <div key={index} style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}>
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
