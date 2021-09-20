-- CreateTable
CREATE TABLE `user` (
    `Codigo` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Dtnasci` VARCHAR(191) NOT NULL,
    `Foto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
