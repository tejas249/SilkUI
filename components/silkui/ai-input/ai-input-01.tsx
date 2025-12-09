"use client"
import React from 'react'
import { CornerRightUp , Mic } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea'