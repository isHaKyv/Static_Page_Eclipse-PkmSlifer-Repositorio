import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TablaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    // Obteniendo datos de la API al cargar el componente
    fetch("http://localhost:8080/api/direc")
      .then((response) => response.json())
      .then((data) => setPedidos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

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

  const sortedPedidos = [...pedidos].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else if (sortConfig.direction === "descending") {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => requestSort("pais")}
                className={getClassNamesFor("pais")}
              >
                País{" "}
                {sortConfig &&
                  sortConfig.key === "pais" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("calle")}
                className={getClassNamesFor("calle")}
              >
                Calle{" "}
                {sortConfig &&
                  sortConfig.key === "calle" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("numero")}
                className={getClassNamesFor("numero")}
              >
                Número{" "}
                {sortConfig &&
                  sortConfig.key === "numero" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell

                onClick={() => requestSort("colonia")}
                className={getClassNamesFor("colonia")}
              >
                Colonia{" "}
                {sortConfig &&
                  sortConfig.key === "colonia" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("codigo_postal")}
                className={getClassNamesFor("codigo_postal")}
              >
                Código Postal{" "}
                {sortConfig &&
                  sortConfig.key === "codigo_postal" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("ciudad_o_municipio")}
                className={getClassNamesFor("ciudad_o_municipio")}
              >
                Ciudad o Municipio{" "}
                {sortConfig &&
                  sortConfig.key === "ciudad_o_municipio" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("estado")}
                className={getClassNamesFor("estado")}
              >
                Estado{" "}
                {sortConfig &&
                  sortConfig.key === "estado" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("numero_de_telefono")}
                className={getClassNamesFor("numero_de_telefono")}
              >
                Número de Teléfono{" "}
                {sortConfig &&
                  sortConfig.key === "numero_de_telefono" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPedidos.map((pedido, index) => (
              <TableRow key={index}>
                <TableCell>{pedido.pais}</TableCell>
                <TableCell>{pedido.calle}</TableCell>
                <TableCell>{pedido.numero}</TableCell>
                <TableCell>{pedido.colonia}</TableCell>
                <TableCell>{pedido.codigo_postal}</TableCell>
                <TableCell>{pedido.ciudad_o_municipio}</TableCell>
                <TableCell>{pedido.estado}</TableCell>
                <TableCell>{pedido.numero_de_telefono}</TableCell>
                <TableCell>
                  {/* Agrega botones u opciones según sea necesario */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablaPedidos;
