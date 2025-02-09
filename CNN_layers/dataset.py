import numpy as np

class ImageDataset:
    def __init__(self, images, labels):
        self.images = images
        self.labels = labels
    
    def __len__(self):
        return len(self.images)
    
    def __getitem__(self, idx):
        image = self.images[idx].astype(np.float32) / 255.0
        label = self.labels[idx]
        return image.transpose(2, 0, 1), label
