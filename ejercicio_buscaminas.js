// Buscaminas - Generar tablero con conteo de minas
// Dado un tablero 2D con celdas 'M' (mina) y '0' (vacío), devolver un nuevo tablero
// donde cada '0' se sustituye por el número de minas adyacentes (8 direcciones).

// Contrato:
// input: array de arrays de strings, ejemplo: [['M','0','0'], ['0','M','0'], ['0','0','0']]
// output: nuevo array de arrays de strings, ejemplo: [['M','2','1'], ['2','M','1'], ['1','1','0']]
// errores/edge: si el tablero está vacío devolver []

// Ejemplos:
// Entrada:
// [
//  ['M','0','0'],
//  ['0','M','0'],
//  ['0','0','0']
// ]
// Salida esperada:
// [
//  ['M','2','1'],
//  ['2','M','1'],
//  ['1','1','0']
// ]

const DIRECCIONES = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], /*celda*/ [0, 1],
  [1, -1], [1, 0], [1, 1]
];

function generarTableroConConteo(tablero) {
  if (!Array.isArray(tablero) || tablero.length === 0) return [];
  const filas = tablero.length;
  const cols = tablero[0].length;
  const salida = Array.from({ length: filas }, () => Array(cols).fill('0'));

  for (let r = 0; r < filas; r++) {
    for (let c = 0; c < cols; c++) {
      if (tablero[r][c] === 'M') {
        salida[r][c] = 'M';
        continue;
      }
      let contador = 0;
      for (const [dr, dc] of DIRECCIONES) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < filas && nc >= 0 && nc < cols) {
          if (tablero[nr][nc] === 'M') contador++;
        }
      }
      salida[r][c] = String(contador);
    }
  }
  return salida;
}

// Prueba rápida
const tablero = [
  ['M','0','0'],
  ['0','M','0'],
  ['0','0','0']
];
console.log('Entrada:');
console.table(tablero);
const resultado = generarTableroConConteo(tablero);
console.log('Salida:');
console.table(resultado);

module.exports = { generarTableroConConteo };