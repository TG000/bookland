-- CreateTable
CREATE TABLE "email_verification_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_verification_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_codes_user_id_key" ON "email_verification_codes"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_codes_email_key" ON "email_verification_codes"("email");

-- AddForeignKey
ALTER TABLE "email_verification_codes" ADD CONSTRAINT "email_verification_codes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
