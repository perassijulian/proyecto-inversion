-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombreProyecto" TEXT NOT NULL,
    "puntajeFinal" TEXT NOT NULL,
    "rentabilidad" TEXT NOT NULL,
    "riesgo" TEXT NOT NULL,
    "impactoComunitario" TEXT NOT NULL,
    "viabilidadOperacional" TEXT NOT NULL,
    "tiempoRecuperacion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY
);
