-- CreateTable
CREATE TABLE `user` (
    `Codigo` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Dtnasci` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Foto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;