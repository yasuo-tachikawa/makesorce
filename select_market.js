
// ��HTML�̓ǂݍ��ݒ���Ɏ��s�F
document.addEventListener('DOMContentLoaded', function() {

   // ���T�u�J�e�S����S�Ĕ�\���ɂ���
   var allSubBoxes = document.getElementsByClassName("sub_category");
   for( var i=0 ; i<allSubBoxes.length ; i++) {
      allSubBoxes[i].style.display = 'none';
      allSubBoxes[i].disabled = true;
   }

   // ���S�ẴZ���N�g�{�b�N�X���Ƃɏ���
   var mainBoxes = document.getElementsByClassName('pulldownset');
   for( var i=0 ; i<mainBoxes.length ; i++) {
   
      var mainSelect = mainBoxes[i].getElementsByClassName("main_category");   // ���C���̃v���_�E���J�e�S���i�����value�����l���Q�Ƃ���̂ŁAselect�v�f�ł���K�v������܂��B�j
      mainSelect[0].onchange = function () {                                   // �����֐�
         // �������e�v�f�Ɋ܂܂�Ă���T�u�J�e�S��������
         var subBox = this.parentNode.getElementsByClassName("sub_category");   // �����e�v�f�Ɋ܂܂��.subbox�i��select�v�f�Ɍ��炸�A�ǂ�ȗv�f�ł��\���܂���B�j
         for( var j=0 ; j<subBox.length ; j++) {
            subBox[j].style.display = 'none';
         }
   
         // ���Y������T�u�J�e�S��������\������
         if( this.value ) {
            var targetSub = document.getElementById( this.value );   // �u���C���̃v���_�E�����j���[�őI������Ă��鍀�ڂ�value�����l�v�Ɠ����������id�����l�Ɏ��v�f�𓾂�
            targetSub.style.display = 'inline';
            targetSub.disabled = false;
            
         }
      };
   
   }

});
