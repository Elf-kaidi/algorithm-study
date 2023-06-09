let arr = [1,2,3,4,5,6,7,8,9,10]
// 使用该算法的前提：有序数组

// 第一种写法，我们定义 target 是在一个在左闭右闭的区间里，也就是[left, right] （这个很重要非常重要）。
// 区间的定义这就决定了二分法的代码应该如何写，因为定义target在[left, right]区间，所以有如下两点：
// while (left <= right) 要使用 <= ，
// 因为left == right是有意义的，所以使用 <=
// if (nums[middle] > target) right 要赋值为 middle - 1，
// 因为当前这个nums[middle]一定不是target，那么接下来要查找的左区间结束下标位置就是 middle - 1
function findOne(arr,target) {
    let left = 0;
    let right = arr.length-1;
    let middle = 0;

    while(left <= right) {
        middle = Math.ceil((left + right)/2);
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target){
            right = middle - 1;
        } else {
            return middle
        }
    }
    return -1;
}

console.log('第一种方法,找到下标:',findOne(arr,4))
/**
 * 如果说定义 target 是在一个在左闭右开的区间里，也就是[left, right) ，那么二分法的边界处理方式则截然不同。
    有如下两点：
    while (left < right)，这里使用 < ,因为left == right在区间[left, right)是没有意义的
    if (nums[middle] > target) right 更新为 middle，
    因为当前nums[middle]不等于target，去左区间继续寻找，而寻找区间是左闭右开区间，
    所以right更新为middle，即：下一个查询区间不会去比较nums[middle]
 */

function findA(arr,target) {
    let left = 0;
    let right = arr.length-1;
    let middle = 0;

    while(left < right) {
        middle = Math.ceil((left + right)/2);
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target){
            right = middle;
        } else {
            return middle
        }
    }
    return -1;
}

console.log('第二种方法,找到下标:',findA(arr,4))