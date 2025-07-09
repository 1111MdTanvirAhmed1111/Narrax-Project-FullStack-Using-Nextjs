"use client";

import React, { useState, useRef, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageInputProps {
  onChange?: (file: File | null) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  accept?: string;
  maxSize?: number; // in MB
  className?: string;
  placeholder?: string;
  error?: string;
}

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  (
    {
      onChange,
      onBlur,
      name,
      disabled = false,
      required = false,
      accept = "image/*",
      maxSize = 10,
      className,
      placeholder = "Upload an image",
      error,
    },
    ref,
  ) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Update preview when selectedFile changes
    React.useEffect(() => {
      console.log("Selected file changed:", selectedFile); // Debug log
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          console.log("FileReader result:", result); // Debug log
          setPreview(result);
        };
        reader.onerror = (e) => {
          console.error("FileReader error:", e); // Debug log
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }, [selectedFile]);

    const handleFileSelect = (file: File) => {
      console.log("Selected file:", file); // Debug log
      if (file && file.type.startsWith("image/")) {
        if (file.size > maxSize * 1024 * 1024) {
          alert(`File size must be less than ${maxSize}MB`);
          return;
        }
        setSelectedFile(file);
        onChange?.(file); // Notify parent
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset input
        }
      }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("File input changed:", e.target.files); // Debug log
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (!disabled) {
        const file = e.dataTransfer.files[0];
        console.log("Dropped file:", file); // Debug log
        if (file) {
          handleFileSelect(file);
        }
      }
    };

    const handleRemoveImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedFile(null);
      setPreview(null);
      onChange?.(null); // Notify parent
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleImageClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (preview) {
        setIsDialogOpen(true);
        setZoomLevel(1);
      }
    };

    const handleZoomIn = () => {
      setZoomLevel((prev) => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
      setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
    };

    const handleResetZoom = () => {
      setZoomLevel(1);
    };

    return (
      <div className={cn("space-y-2", className)}>
        <Card className={cn("overflow-hidden", error && "border-red-500")}>
          <CardContent className="p-0">
            <div
              className={cn(
                "relative aspect-square border-2 border-dashed transition-colors cursor-pointer",
                isDragOver && !disabled
                  ? "border-blue-500 bg-blue-50"
                  : preview
                    ? "border-transparent"
                    : "border-gray-300 hover:border-gray-400",
                disabled && "opacity-50 cursor-not-allowed",
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => !preview && !disabled && fileInputRef.current?.click()}
            >
              {preview ? (
                <>
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Selected image preview"
                    className="object-cover cursor-pointer hover:opacity-90 transition-opacity w-full h-full"
                    onClick={handleImageClick}
                  />
                  {!disabled && (
                    <div className="absolute top-2 right-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white border-0"
                        onClick={handleRemoveImage}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1 text-sm">{placeholder}</h3>
                  <p className="text-xs text-gray-500 mb-2">Drag and drop or click to select</p>
                  <div className="text-xs text-gray-400">Max {maxSize}MB</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          onBlur={onBlur}
          name='image'
          required={required}
          disabled={disabled}
          className="hidden"
        />

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <DialogHeader className="p-4 pb-2">
              <DialogTitle>Image Preview</DialogTitle>
            </DialogHeader>
            <div className="relative flex-1 overflow-hidden">
              <div className="overflow-auto max-h-[70vh] flex items-center justify-center p-4">
                <div
                  className="relative transition-transform duration-200 ease-out"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Full size preview"
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-full">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                >
                  <span className="text-lg">−</span>
                </Button>
                <span className="text-sm font-medium min-w-[60px] text-center">{Math.round(zoomLevel * 100)}%</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                >
                  <span className="text-lg">+</span>
                </Button>
                <div className="w-px h-4 bg-white/30 mx-1" />
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 px-3 text-white hover:bg-white/20 text-xs"
                  onClick={handleResetZoom}
                >
                  Reset
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
);

ImageInput.displayName = "ImageInput";

export { ImageInput };