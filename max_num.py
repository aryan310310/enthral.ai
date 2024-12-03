def find_maximum(numbers):
  
    if not numbers:  # Check if the list is empty
        return None
    return max(numbers)


print(find_maximum([3, 5, 7, 2, 8]))  
print(find_maximum([]))              
