using backend.entity.product;
using backend.entity.utilites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.service
{
    public class CategoryService
    {
        private DataContext _category;

        public void Add(Category category)
        {
            _category.Add(category);  
        }

        public void Remove(Guid categoryId)
        {
            _category.Remove(categoryId);
        }

        public Category Edit(Guid categoryId, Category category)
        {
            var SelectedCategory = _category.CategorySet
                .ToList()
                .Find(c => c.Id == categoryId);
            SelectedCategory = category;
            
            return SelectedCategory;
        }

        public IEnumerable<Category> GetAll()
        {
            return _category.CategorySet;
        }

        public Category GetOne(Guid categoryId)
        {
            var SelectedCategory = _category.CategorySet.ToList().Find(c => c.Id == categoryId);

            return SelectedCategory;
        }
    }
}
