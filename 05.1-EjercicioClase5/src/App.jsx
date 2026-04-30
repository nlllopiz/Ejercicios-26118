import Layout from './componentes/layout/Layout';
import TarjetaProducto from './componentes/productos/TarjetaProducto';

function App() {
  const productos = [
    {
      id: 1,
      nombre: 'Zapatillas',
      precio: 150,
      imagen: '/images/zapatillas.jpg'
    },
    {
      id: 2,
      nombre: 'Remera',
      precio: 50,
      imagen: '/images/remera.webp'
    },
    {
      id: 3,
      nombre: 'Gorra',
      precio: 30,
      imagen: '/images/gorra.jpg'
    }
  ];

  return (
    <Layout>
      <h2 className="mb-4">Productos</h2>

      <div className="row">
        {productos.map(prod => (
          <TarjetaProducto key={prod.id} {...prod} />
        ))}
      </div>
    </Layout>
  );
}

export default App;