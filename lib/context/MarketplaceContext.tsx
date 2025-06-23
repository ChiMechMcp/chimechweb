'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DigitalEmployee {
  id: string
  name: string
  description: string
  category: string
  price: number
  rating: number
  downloads: number
  provider: {
    name: string
    verified: boolean
  }
  tags: string[]
  features: string[]
  avatar: string
}

interface CartItem extends DigitalEmployee {
  quantity: number
}

interface MarketplaceContextType {
  // Cart functionality
  cartItems: CartItem[]
  addToCart: (employee: DigitalEmployee) => void
  removeFromCart: (employeeId: string) => void
  updateCartQuantity: (employeeId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
  
  // Wishlist functionality
  wishlistItems: DigitalEmployee[]
  addToWishlist: (employee: DigitalEmployee) => void
  removeFromWishlist: (employeeId: string) => void
  isInWishlist: (employeeId: string) => boolean
  
  // Trial functionality
  trialItems: string[]
  startTrial: (employeeId: string) => void
  endTrial: (employeeId: string) => void
  isInTrial: (employeeId: string) => boolean
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined)

export function MarketplaceProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<DigitalEmployee[]>([])
  const [trialItems, setTrialItems] = useState<string[]>([])

  // Cart functions
  const addToCart = (employee: DigitalEmployee) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === employee.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === employee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...employee, quantity: 1 }]
    })
  }

  const removeFromCart = (employeeId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== employeeId))
  }

  const updateCartQuantity = (employeeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(employeeId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === employeeId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  // Wishlist functions
  const addToWishlist = (employee: DigitalEmployee) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === employee.id)) {
        return prev
      }
      return [...prev, employee]
    })
  }

  const removeFromWishlist = (employeeId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== employeeId))
  }

  const isInWishlist = (employeeId: string) => {
    return wishlistItems.some(item => item.id === employeeId)
  }

  // Trial functions
  const startTrial = (employeeId: string) => {
    setTrialItems(prev => {
      if (prev.includes(employeeId)) {
        return prev
      }
      return [...prev, employeeId]
    })
  }

  const endTrial = (employeeId: string) => {
    setTrialItems(prev => prev.filter(id => id !== employeeId))
  }

  const isInTrial = (employeeId: string) => {
    return trialItems.includes(employeeId)
  }

  const value: MarketplaceContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    trialItems,
    startTrial,
    endTrial,
    isInTrial,
  }

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  )
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext)
  if (context === undefined) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider')
  }
  return context
}