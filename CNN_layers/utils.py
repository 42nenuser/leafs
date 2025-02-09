import matplotlib.pyplot as plt

def visualize_batch(images, labels, classes):
    plt.figure(figsize=(12, 6))
    for i in range(8):
        plt.subplot(2, 4, i+1)
        img = images[i].permute(1, 2, 0).numpy()
        plt.imshow(img)
        plt.title(classes[labels[i]])
        plt.axis('off')
    plt.show()
