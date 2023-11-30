import type { NextRequest } from "next/server"

import * as productController from "@/features/example/product.controller"

export async function GET(request: NextRequest) {
  const users = request.nextUrl.searchParams.get("data") ?? undefined
  

  return productController.listProducts({
    users
  })
}