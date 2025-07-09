
import React, { useRef, useState, forwardRef, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      name = "image",
      disabled,
      required,
      accept = "image/*",
      maxSize = 10,
      className,
      placeholder = "Upload an image",
      error: externalError,
    },
    ref
  ) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | undefined>(externalError);
    const [dragOver, setDragOver] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (!file) return setPreview(null);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.onerror = () => setError("Failed to preview image.");
      reader.readAsDataURL(file);
    }, [file]);

    const selectFile = (file: File) => {
      if (!file.type.startsWith("image/")) return setError("Only image files are allowed.");
      if (file.size > maxSize * 1024 * 1024) return setError(`File must be under ${maxSize}MB.`);
      setError(undefined);
      setFile(file);
      onChange?.(file);
      if (inputRef.current) inputRef.current.value = "";
    };

    const removeFile = () => {
      setFile(null);
      setPreview(null);
      setError(undefined);
      onChange?.(null);
      if (inputRef.current) inputRef.current.value = "";
    };

    return (
      <div className={cn("space-y-2", className)}>
        <Card className={cn("overflow-hidden", error && "border-red-500")}>
          <CardContent className="p-0">
            <div
              className={cn(
                "relative aspect-square border-2 border-dashed cursor-pointer transition-colors",
                dragOver ? "border-blue-500 bg-blue-50" : file ? "border-transparent" : "border-gray-300 hover:border-gray-400",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !file && !disabled && inputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                if (!disabled && e.dataTransfer.files[0]) selectFile(e.dataTransfer.files[0]);
              }}
              onDragOver={(e) => !disabled && setDragOver(true)}
              onDragLeave={() => setDragOver(false)}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                    onClick={() => setDialogOpen(true)}
                  />
                  {!disabled && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 h-8 w-8 p-0 bg-black/50 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{placeholder}</h3>
                  <p className="text-xs text-gray-500">Drag & drop or click to select</p>
                  <p className="text-xs text-gray-400">Max {maxSize}MB</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <input
          ref={(node) => {
            inputRef.current = node!;
            if (typeof ref === "function") ref(node!);
            else if (ref) ref.current = node!;
          }}
          type="file"
          name={name}
          accept={accept}
          required={required}
          disabled={disabled}
          onBlur={onBlur}
          onChange={(e) => e.target.files?.[0] && selectFile(e.target.files[0])}
          className="sr-only"  // <-- Changed here from "hidden" to "sr-only"
        />

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <DialogHeader className="p-4 pb-2">
              <DialogTitle>Image Preview</DialogTitle>
            </DialogHeader>
            <div className="relative flex-1 overflow-hidden">
              <div className="overflow-auto max-h-[70vh] flex items-center justify-center p-4">
                <div className="transition-transform" style={{ transform: `scale(${zoom})` }}>
                  <img src={preview ?? "/placeholder.svg"} alt="Zoomed preview" className="max-w-full object-contain" />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/80 text-white px-4 py-2 rounded-full">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}>−</Button>
                <span className="text-sm w-16 text-center">{Math.round(zoom * 100)}%</span>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}>+</Button>
                <div className="w-px h-4 bg-white/30 mx-1" />
                <Button size="sm" variant="ghost" className="h-8 px-3 text-xs" onClick={() => setZoom(1)}>Reset</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

ImageInput.displayName = "ImageInput";

export { ImageInput };
