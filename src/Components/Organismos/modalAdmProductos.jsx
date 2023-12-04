import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  TextField,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    name: "",
    price: 0,
    image: "",
    category: "",
    seccion: "",
    det: "",
    cantidad: 0,
  });
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleAgregarProducto = () => {
    setNuevoProducto({
      name: "",
      price: 0,
      image: "",
      category: "",
      seccion: "",
      det: "",
      cantidad: 0,
    });
    setSelectedProductIndex(null);
    setModalOpen(true);
  };

  

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const sortedProductos = [...productos].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else if (sortConfig.direction === "descending") {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
    return 0;
  });

  const handleModificarProducto = (index) => {
    setNuevoProducto(sortedProductos[index]);
    setSelectedProductIndex(index);
    setModalOpen(true);
  };

  const handleEliminarProducto = (id) => {
    fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedProductos = [...productos];
        updatedProductos.splice(selectedProductIndex, 1);
        setProductos(updatedProductos);
        setModalOpen(false);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleGuardarProducto = () => {
    if (selectedProductIndex !== null) {
      fetch(`http://localhost:8080/api/productos/${productos[selectedProductIndex]?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      })
        .then(() => {
          const updatedProductos = [...productos];
          updatedProductos[selectedProductIndex] = nuevoProducto;
          setProductos(updatedProductos);
          setModalOpen(false);
        })
        .catch((error) => console.error("Error updating product:", error));
    } else {
      fetch("http://localhost:8080/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      })
        .then(() => {
          setProductos([...productos, nuevoProducto]);
          setModalOpen(false);
        })
        .catch((error) => console.error("Error adding product:", error));
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Nombre{" "}
                  {sortConfig &&
                    sortConfig.key === "name" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell
                onClick={() => requestSort("price")}
                className={getClassNamesFor("price")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Precio{" "}
                  {sortConfig &&
                    sortConfig.key === "price" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell
                onClick={() => requestSort("image")}
                className={getClassNamesFor("image")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Imagen{" "}
                  {sortConfig &&
                    sortConfig.key === "image" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell
                onClick={() => requestSort("category")}
                className={getClassNamesFor("category")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Categoría{" "}
                  {sortConfig &&
                    sortConfig.key === "category" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell
                onClick={() => requestSort("seccion")}
                className={getClassNamesFor("seccion")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Sección{" "}
                  {sortConfig &&
                    sortConfig.key === "seccion" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell
                onClick={() => requestSort("cantidad")}
                className={getClassNamesFor("cantidad")}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Cantidad{" "}
                  {sortConfig &&
                    sortConfig.key === "cantidad" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    ))}
                </div>
              </TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedProductos.map((producto, index) => (
              <TableRow key={index}>
                <TableCell>{producto.name}</TableCell>
                <TableCell>{producto.price}</TableCell>
                <TableCell>{producto.image}</TableCell>
                <TableCell>{producto.category}</TableCell>
                <TableCell>{producto.seccion}</TableCell>
                <TableCell>{producto.cantidad}</TableCell>
                <TableCell>
                  <Button onClick={() => handleModificarProducto(index)}>
                    <EditIcon />
                  </Button>
                  <Button onClick={() => handleEliminarProducto(producto.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAgregarProducto}
        style={{ marginTop: "20px" }}
      >
        Agregar Producto
      </Button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {selectedProductIndex !== null
              ? "Modificar Producto"
              : "Nuevo Producto"}
          </Typography>
          <TextField
            label="Nombre del Producto"
            value={nuevoProducto.name}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, name: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Precio"
            type="number"
            value={nuevoProducto.price}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, price: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Imagen"
            value={nuevoProducto.image}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, image: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Categoría"
            value={nuevoProducto.category}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, category: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sección"
            value={nuevoProducto.seccion}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, seccion: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Detalles"
            value={nuevoProducto.det}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, det: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Cantidad"
            type="number"
            value={nuevoProducto.cantidad}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, cantidad: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleGuardarProducto}
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Administrador;
